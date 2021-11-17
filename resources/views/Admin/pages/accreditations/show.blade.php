@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Аккредитации
                        <a href="/superadmin/accreditations/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
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
                                                <th>Название аккредитации</th>
                                                <th>Организация</th>
                                                <th>Пользователь</th>
                                                <th>Статус клиента</th>
                                                <th>Статус поставщика</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название аккредитации</th>
                                                <th>Организация</th>
                                                <th>Пользователь</th>
                                                <th>Статус клиента</th>
                                                <th>Статус поставщика</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            @if(!empty($accreditations))
                                                @foreach($accreditations as $a)
                                                    <tr role="row" class="odd">
                                                        <td>{{$a->id}}</td>
                                                        <td>{{$a->name}}</td>
                                                        <td>{{$a->organization->name}}</td>
                                                        <td>{{$a->user->name}}</td>
                                                        <td>
                                                            @if($a->complete_client)
                                                                <span class="badge bg-green">Пройдена</span>
                                                            @else
                                                                <span class="badge bg-red">Не пройдена</span>
                                                            @endif
                                                        </td>
                                                        <td>
                                                            @if($a->complete_prodavec)
                                                                <span class="badge bg-green">Пройдена</span>
                                                            @else
                                                                <span class="badge bg-red">Не пройдена</span>
                                                            @endif
                                                        </td>
                                                        <td>{{$a->created_at}}</td>
                                                        <td>
                                                            <a href="/superadmin/accreditations/edit/{{$a->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/accreditations/delete/{{$a->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
