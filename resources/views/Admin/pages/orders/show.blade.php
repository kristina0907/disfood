@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Заявки
                        <a href="/superadmin/orders/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
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
                                                <th>Организация</th>
                                                <th>Заказчик</th>
                                                <th>Откуда</th>
                                                <th>Куда</th>
                                                <th>Предложение</th>
                                                <th>Статус</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Организация</th>
                                                <th>Заказчик</th>
                                                <th>Откуда</th>
                                                <th>Куда</th>
                                                <th>Предложение</th>
                                                <th>Статус</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            @if(!empty($orders))
                                                @foreach($orders as $order)
                                                    <tr role="row" class="odd">
                                                        <td>{{$order->id}}</td>
                                                        <td>{{$order->organization->name}}</td>
                                                        <td>
                                                            @if(!empty($order->user))
                                                                {{$order->user->name}}
                                                            @endif
                                                        </td>
                                                        <td>{{$order->from->title_ru}}</td>
                                                        <td>{{$order->delivery->title_ru}}</td>
                                                        <td>{{$order->offer->name}}</td>
                                                        <td>{{$order->status->name}}</td>
                                                        <td>{{$order->created_at}}</td>
                                                        <td>
                                                            <a href="/superadmin/orders/edit/{{$order->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/orders/delete/{{$order->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
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
