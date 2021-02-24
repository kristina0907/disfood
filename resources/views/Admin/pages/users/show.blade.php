@extends('Admin.master')

@section('content')


    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Пользователи
                        <a href="/superadmin/user/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>

                    </h2>
                    <ul class="header-dropdown m-r--5">
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">more_vert</i>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="javascript:void(0);">Action</a></li>
                                <li><a href="javascript:void(0);">Another action</a></li>
                                <li><a href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
                <div class="body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Имя</th>
                                <th>E-mail</th>
                                <th>Роли</th>
                                <th>Дата создания</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Имя</th>
                                <th>E-mail</th>
                                <th>Роли</th>
                                <th>Дата создания</th>
                                <th>Действия</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            @if(!empty($users))
                                @foreach($users as $user)
                                    <tr role="row" class="odd">
                                        <td class="sorting_1">{{$user->id}}</td>
                                        <td class="">{{$user->name}}</td>
                                        <td class="">{{$user->email}}</td>
                                        <td>
                                            @if(!empty($user->roles))
                                                @foreach($user->roles as $role)
                                                    <div class="btn-secondary" style="padding: 5px;">
                                                        <span class="badge bg-green">{{$role->name}}</span>
                                                    </div>
                                                @endforeach
                                            @endif
                                        </td>
                                        <td class="">{{$user->created_at}}</td>
                                        <td class="">
                                            <a href="/superadmin/user/edit/{{$user->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                            <a href="/superadmin/user/delete/{{$user->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
@endsection
