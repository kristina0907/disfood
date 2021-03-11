<?php

namespace App\Services;



use App\Repositories\OrganizationRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class OrganizationService
{
    /**
     * @var OrganizationRepository
     */

    protected $organizationRepository;

    /**
     * OrganizationService constructor.
     * @param OrganizationRepository $organizationRepository
     */

    public function __construct(OrganizationRepository $organizationRepository)
    {
        $this->organizationRepository = $organizationRepository;
    }

    public function findByText($req)
    {
        return $this->organizationRepository->findByText($req);
    }


    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->organizationRepository->getAll();
    }

    /**
     * @param $data
     * @return mixed
     */

    public function saveOrganizationData($data)
    {
        $validated = $data->validate([
            'name' => 'string|required|max:255',
            'inn' => 'required|integer|unique:organizations',
            'kpp' => 'integer',
            'ogrn' => 'integer',
            'adress' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'bank_name' => 'required|string|max:255',
            'r_account' => 'required|integer',
            'kor_account' => 'required|integer',
            'fio_ceo' => 'required|string|max:255',
            'reason' => 'required|string|max:255',
            'number_power_of_attorney' => 'required|integer',
            'date_power_of_attorney' => 'required|date',
            'user_id' => 'required|integer',
        ]);

        $result = $this->organizationRepository->save($data);

        return $result;

    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function updateOrganizationData($data,$id)
    {
        $validated = $data->validate([
            'name' => 'string|required|max:255',
            'inn' => 'required|integer|unique:organizations,inn, ' .$data->id,
            'kpp' => 'integer',
            'ogrn' => 'integer',
            'adress' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'bank_name' => 'required|string|max:255',
            'r_account' => 'required|integer',
            'kor_account' => 'required|integer',
            'fio_ceo' => 'required|string|max:255',
            'reason' => 'required|string|max:255',
            'number_power_of_attorney' => 'required|integer',
            'date_power_of_attorney' => 'required|date',
            'user_id' => 'required|integer',
        ]);

        DB::beginTransaction();

        try {
            $cat = $this->organizationRepository->update($data, $id);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::info($e->getMessage());

            throw new InvalidArgumentException('Unable to update post data');
        }

        DB::commit();

        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getOrganizationById($id)
    {
        $cat = $this->organizationRepository->getById($id);
        return $cat;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function deleteOrganizationById($id)
    {
        if(!empty($id))
        {
            DB::beginTransaction();

            try {
                $category = $this->organizationRepository->delete($id);

            } catch (\Exception $e) {
                DB::rollBack();
                Log::info($e->getMessage());

                throw new InvalidArgumentException('Unable to delete post data');
            }

            DB::commit();

            return $category;
        }

    }

    /**
     * @return array
     */

    public function getTreeCats()
    {
        $cats = $this->categoryRepository->getAll()->toArray();
        $tree = $this->buildTree($cats);

        return $tree;
    }

    /**
     * @param array $elements
     * @param int $parentId
     * @return array
     */

    private function buildTree(array $elements, $parentId = 0) {
        $branch = array();

        foreach ($elements as $element) {
            if ($element['parent_id'] == $parentId) {
                $children = $this->buildTree($elements, $element['id']);
                if ($children) {
                    $element['children'] = $children;
                }
                $branch[] = $element;
            }
        }

        return $branch;
    }
}
