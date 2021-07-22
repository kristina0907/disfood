@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание Документа для ордера
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/orderdocuments/create" method="POST" enctype="multipart/form-data">
                        @csrf
                        <label for="name">Название документа</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" placeholder="Введите название документа...">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="price">Цена</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="price" class="form-control" name="price" placeholder="Введите цену...">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @include('Admin.layouts.errors')
                        <button type="submit" class="btn btn-primary m-t-15 waves-effect">
                            Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
