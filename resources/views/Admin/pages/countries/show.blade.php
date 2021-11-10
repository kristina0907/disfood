@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Категории
                        <a href="/superadmin/countries/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>
                    </h2>
                </div>
                <div class="body">
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="home_only_icon_title">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название Страны</th>
                                                <th>Код страны</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название категории</th>
                                                <th>Код страны</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            @if(!empty($countries))
                                                @foreach($countries as $country)
                                                    <tr role="row" class="odd">
                                                        <td>{{$country->id}}</td>
                                                        <td>{{$country->title_ru}}</td>
                                                        <td>{{$country->code}}</td>
                                                        <td>
                                                            <a href="/superadmin/countries/edit/{{$country->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/countries/delete/{{$country->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
