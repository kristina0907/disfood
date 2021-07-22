@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Документы для ордеров
                        <a href="/superadmin/orderdocuments/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
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
                                <th>Название</th>
                                <th>Цена</th>
                                <th>Активно</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Название</th>
                                <th>Цена</th>
                                <th>Активно</th>
                                <th>Действия</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            @if(!empty($documents))
                                @foreach($documents as $document)
                                    <tr role="row" class="odd">
                                        <td>
                                            {{$document->id}}
                                        </td>
                                        <td>
                                            {{$document->name}}
                                        </td>
                                        <td>
                                            {{$document->price}}
                                        </td>
                                        <td>
                                            @if(!empty($document->active))
                                                {{$document->active}}
                                            @endif
                                        </td>
                                        <td>
                                            <a href="/superadmin/orderdocuments/edit/{{$document->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                            <a href="/superadmin/orderdocuments/delete/{{$document->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
