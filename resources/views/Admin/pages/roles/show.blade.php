@extends('Admin.master')

@section('content')
    <div class="container-fluid">
        <div class="col md-12">
            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Панель администратора</h1>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="row">
                    <a href="/superadmin/role/create" class="btn btn-success btn-circle">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
            </div>

            <div class="col-md-12 m-3">
                    <div class="row">
                        <div class="card shadow mb-12">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Роли пользователей</h6>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-6">
                                                <div class="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="dataTable_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="dataTable"></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-bordered dataTable" id="dataTable" role="grid" aria-describedby="dataTable_info" style="width: 100%;" width="100%" cellspacing="0">
                                                    <thead>
                                                    <tr role="row">
                                                        <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style="width: 75px;" aria-label="Name: activate to sort column descending" aria-sort="ascending">ID</th>
                                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style="width: 99px;" aria-label="Position: activate to sort column ascending">Название</th>
                                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style="width: 59px;" aria-label="Office: activate to sort column ascending">Slug</th>
                                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style="width: 31px;" aria-label="Age: activate to sort column ascending">Включено</th>
                                                        <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style="width: 71px;" aria-label="Start date: activate to sort column ascending">Создано</th>
                                                    </tr>
                                                    </thead>
                                                    <tfoot>
                                                    <tr>
                                                        <th rowspan="1" colspan="1">ID</th>
                                                        <th rowspan="1" colspan="1">Название</th>
                                                        <th rowspan="1" colspan="1">Slug</th>
                                                        <th rowspan="1" colspan="1">Включено</th>
                                                        <th rowspan="1" colspan="1">Создано</th>
                                                    </tr>
                                                    </tfoot>
                                                    <tbody>
                                                    @if(!empty($roles))
                                                        @foreach($roles as $role)
                                                            <tr role="row" class="odd">
                                                                <td class="sorting_1">{{$role->id}}</td>
                                                                <td class="">{{$role->name}}</td>
                                                                <td class="">{{$role->slug}}</td>
                                                                <td class="">{{$role->active}}</td>
                                                                <td class="">{{$role->created_at}}</td>
                                                            </tr>
                                                        @endforeach
                                                    @endif
                                                 </tbody>
                                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 57 of 57 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
@endsection
