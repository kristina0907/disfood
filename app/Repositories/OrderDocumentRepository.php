<?php


namespace App\Repositories;



use App\Contracts\OrderDocumentContract;
use App\Models\OrderDocument;


class OrderDocumentRepository implements OrderDocumentContract
{

    /**
     * @var OrderDocument
     */

    protected $document;

    /**
     * OrderDocumentRepository constructor.
     * @param OrderDocument $document
     */

    public function __construct(OrderDocument $document)
    {
        $this->document = $document;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->document->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->document
            ->where('id', $id)
            ->first();
    }



    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {

        $document = new $this->document;
        $document->name = $data['name'];
        $document->price = $data['price'];
        if(!empty($data['active']))
        {
            $document->active = $data['active'];
        }

        $document->save();

        return $document->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        $document = $this->document->find($id);
        $document->name = $data['name'];
        $document->price = $data['price'];
        if(!empty($data['active']))
        {
            $document->active = $data['active'];
        }
        $document->update();

        return $document;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $document = $this->document->find($id);
        $document->delete();

        return $document;
    }



}
