@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Фильтры
                        <a href="/superadmin/filters/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
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
                                                <th>Название</th>
                                                <th>slug</th>
                                                <th>Описание</th>
                                                <th>Активно</th>
                                                <th>Типы к которым относится</th>
                                                <th>Значения</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название</th>
                                                <th>slug</th>
                                                <th>Описание</th>
                                                <th>Активно</th>
                                                <th>Типы к которым относится</th>
                                                <th>Значения</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            @if(!empty($filters))
                                                @foreach($filters as $filter)
                                                    <tr role="row" class="odd">
                                                        <td>{{$filter->id}}</td>
                                                        <td>{{$filter->name}}</td>
                                                        <td>{{$filter->slug}}</td>
                                                        <td>{{$filter->desc}}</td>
                                                        <td>{{$filter->active}}</td>
                                                        <td>
                                                            @if(!empty($filter->types))
                                                                @foreach($filter->types as $type)
                                                                    {{$type->name}} <br/>
                                                                @endforeach
                                                            @endif
                                                        </td>
                                                        <td>
                                                            @if(!empty($filter->values))
                                                                @foreach($filter->values as $value)
                                                                    {{$value->value}} <br>
                                                                @endforeach
                                                            @endif
                                                        </td>
                                                        <td>{{$filter->created_at}}</td>
                                                        <td>
                                                            <a href="/superadmin/filters/edit/{{$filter->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/filters/delete/{{$filter->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
