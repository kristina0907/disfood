@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание Предложения
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/offers/create" method="POST" enctype="multipart/form-data">
                        @csrf
                        <label for="name">Название предложения</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" placeholder="Введите название предложения...">
                            </div>
                        </div>

                        <label for="description">Описание предложения</label>
                        <div class="form-group">
                            <div class="form-line">
                                <textarea name="description" rows="4" class="form-control no-resize" placeholder="Описание предложения..."></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    @if(!empty($products))
                                        <label for="product_id">Товар</label>
                                        <select class="form-control" name="product_id">
                                            @foreach($products as $product)
                                                <option value="{{$product->id}}">{{$product->name}}</option>
                                            @endforeach
                                        </select>
                                    @endif
                                </div>
                                <div class="col-md-6">
                                    <label for="companyInput">Организация</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" autocomplete="off" id="companyInput" list="companyList" class="form-control" name="organization_inn" placeholder="Введите название организации...">
                                            <datalist id="companyList"></datalist>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="countryInput">Страна</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" autocomplete="off" id="countryInput" list="countryList" class="form-control" name="country_id" placeholder="Введите название страны...">
                                            <datalist id="countryList"></datalist>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="cityInput">Город</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" autocomplete="off" id="cityInput" list="cityList" class="form-control" name="city_id" placeholder="Введите название города...">
                                            <datalist id="cityList">

                                            </datalist>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <label for="description">Адрес</label>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="adress" rows="4" class="form-control no-resize" placeholder="Адрес..."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="price">Цена</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="price" class="form-control" name="price" placeholder="Введите цену...">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="capacity">Количество</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="capacity" class="form-control" name="capacity" placeholder="Введите количство...">
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
