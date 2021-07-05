@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Предложения
                        <a href="/superadmin/offers/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
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
                                <th>Название предложения</th>
                                <th>Описание</th>
                                <th>Категория</th>
                                <th>Тип</th>
                                <th>Товар</th>
                                <th>Организация</th>
                                <th>Страна</th>
                                <th>Город</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Активно</th>
                                <th>Действия</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>ID</th>
                                <th>Название предложения</th>
                                <th>Описание</th>
                                <th>Категория</th>
                                <th>Тип</th>
                                <th>Товар</th>
                                <th>Организация</th>
                                <th>Страна</th>
                                <th>Город</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Активно</th>
                                <th>Действия</th>
                            </tr>
                            </tfoot>
                            <tbody>
                            @if(!empty($offers))
                                @foreach($offers as $offer)
                                    <tr role="row" class="odd">
                                        <td>
                                            {{$offer->id}}
                                        </td>
                                        <td>
                                            {{$offer->name}}
                                        </td>
                                        <td>
                                            {{$offer->description}}
                                        </td>
                                        <td>
                                            @if(!empty($offer->category))
                                                {{$offer->category->name}}
                                            @endif
                                        </td>
                                        <td>
                                            @if(!empty($offer->type))
                                                {{$offer->type->name}}
                                            @endif
                                        </td>
                                        <td>
                                            @if(!empty($offer->product))
                                                {{$offer->product->name}}
                                            @endif
                                        </td>
                                        <td>
                                            @if(!empty($offer->organization))
                                                {{$offer->organization->name}}
                                            @endif
                                        </td>
                                        <td>
                                            @if(!empty($offer->country->title_ru))
                                                {{$offer->country->title_ru}}
                                            @endif
                                        </td>
                                        <td>
                                            @if(!empty($offer->city->title_ru))
                                                {{$offer->city->title_ru}}
                                            @endif
                                        </td>
                                        <td>
                                            @if(!empty($offer->price))
                                                {{$offer->price}}
                                            @endif
                                        </td>
                                        <td>
                                            @if(!empty($offer->capacity))
                                                {{$offer->capacity}}
                                            @endif
                                        </td>
                                        <td>
                                            @if(!empty($offer->active))
                                                {{$offer->active}}
                                            @endif
                                        </td>
                                        <td>
                                            <a href="/superadmin/offers/edit/{{$offer->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                            <a href="/superadmin/offers/delete/{{$offer->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
