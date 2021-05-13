@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Настройки
                        <a href="/superadmin/simplepages/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>
                    </h2>
                </div>
                <div class="body">
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="home_only_icon_title">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Фото</th>
                                                <th>Название</th>
                                                <th>slug</th>
                                                <th>Описание</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Фото</th>
                                                <th>Название</th>
                                                <th>slug</th>
                                                <th>Описание</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            @if(!empty($pages))
                                                @foreach($pages as $page)
                                                    <tr role="row" class="odd">
                                                        <td>{{$page->id}}</td>
                                                        <td><img src="{{$page->image}}" /> </td>
                                                        <td>{{$page->title}}</td>
                                                        <td>
                                                            {{$page->slug}}
                                                        </td>
                                                        <td>
                                                            {{$page->description}}
                                                        </td>
                                                        <td>{{$page->created_at}}</td>
                                                        <td>
                                                            <a href="/superadmin/simplepages/edit/{{$page->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/simplepages/delete/{{$page->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            @endif
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
