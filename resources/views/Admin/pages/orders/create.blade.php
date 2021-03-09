@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание заказа
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/orders/create" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-3">
                                    <label for="organization_id">Организация</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <select name="organization_id" id="organization_id">
                                                @if(!empty($organizations))
                                                    @foreach($organizations as $organizations)
                                                        <option value="{{$organizations->id}}">{{$organizations->name}}</option>
                                                    @endforeach
                                                @endif
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="user_id">Пользователь</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <select name="user_id" id="user_id">
                                                @if(!empty($users))
                                                    @foreach($users as $user)
                                                        <option value="{{$user->id}}">{{$user->name}}</option>
                                                    @endforeach
                                                @endif
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label for="offer_id">Предложение</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <select name="offer_id" id="offer_id">
                                                @if(!empty($offers))
                                                    @foreach($offers as $offer)
                                                        <option value="{{$offer->id}}">{{$offer->name}}</option>
                                                    @endforeach
                                                @endif
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="col-md-4">
                                        <label for="status_id">Статус</label>
                                        <div class="form-group">
                                            <div class="form-line">
                                                <select name="status_id" id="status_id">
                                                    @if(!empty($statuses))
                                                        @foreach($statuses as $status)
                                                            <option value="{{$status->id}}">{{$status->name}}</option>
                                                        @endforeach
                                                    @endif
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="cityInput">Откуда(город)</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" autocomplete="off" id="cityInputFrom" list="cityList" class="form-control" name="from_id" placeholder="Введите название города...">
                                            <datalist id="cityList">

                                            </datalist>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="cityInput">Куда(город)</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" autocomplete="off" id="cityInputTo" list="cityList" class="form-control" name="to_id" placeholder="Введите название города...">
                                            <datalist id="cityList">

                                            </datalist>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>




                        <br/>
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
