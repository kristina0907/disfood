@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Статусы Организации
                        <a href="/superadmin/organizationstatuses/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>

                    </h2>
                </div>
                <div class="body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Название статуса</th>
                                <th>Активно</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Название статуса</th>
                                <th>Активно</th>
                                <th>Действия</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            @if(!empty($statuses))
                                @foreach($statuses as $status)
                                    <tr role="row" class="odd">
                                        <td>
                                            {{$status->id}}
                                        </td>
                                        <td>
                                            {{$status->name}}
                                        </td>
                                        <td>
                                            {{$status->active}}
                                        </td>
                                        <td>
                                            <a href="/superadmin/organizationstatuses/edit/{{$status->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                            <a href="/superadmin/organizationstatuses/delete/{{$status->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
