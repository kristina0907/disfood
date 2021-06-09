@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Организации
                        <a href="/superadmin/organizations/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
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
                                <th>Название организации</th>
                                <th>ИНН\КПП</th>
                                <th>Юр.Адрес</th>
                                <th>Фио руководителя</th>
                                <th>Номер телефона</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Название организации</th>
                                <th>ИНН\КПП</th>
                                <th>Юр.Адрес</th>
                                <th>Фио руководителя</th>
                                <th>Номер телефона</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            @if(!empty($organizations))
                                @foreach($organizations as $organization)
                                    <tr role="row" class="odd">
                                        <td>
                                            {{$organization->id}}
                                        </td>
                                        <td>
                                            {{$organization->name}}
                                        </td>
                                        <td>
                                            {{$organization->inn}} / {{$organization->kpp}}
                                        </td>
                                        <td>
                                            {{$organization->adress}}
                                        </td>
                                        <td>
                                            {{$organization->fio_ceo}}
                                        </td>
                                        <td>
                                            {{$organization->phone}}
                                        </td>
                                        <td>
                                            @if(!empty($organization->status))
                                                {{$organization->status->name}}
                                            @else
                                                Нет статуса
                                            @endif
                                        </td>
                                        <td>
                                            <a href="/superadmin/organizations/edit/{{$organization->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                            <a href="/superadmin/organizations/delete/{{$organization->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
