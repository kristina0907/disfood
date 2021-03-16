@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание организации
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/organizations/create" method="POST">
                        @csrf
                       <div class="col-md-12">
                           <div class="row">
                               <div class="col-md-6">
                                   <label for="inn">ИНН</label>
                                   <div class="form-group">
                                       <div class="form-line">
                                           <input type="number" id="inn" class="form-control" name="inn" placeholder="ИНН" required>
                                       </div>
                                   </div>
                               </div>
                               <div class="col-md-6">
                                    <button id="innsend" class="btn btn-dark" type="button">Найти организацию</button>
                               </div>
                           </div>


                       </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="name">Название организации</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="name" class="form-control" name="name" placeholder="Введите название организации..." required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone">Телефон</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="phone" class="form-control" name="phone" placeholder="Телефон">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="ogrn">ОГРН</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="ogrn" class="form-control" name="ogrn" placeholder="ОГРН">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="adress">Адрес</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="adress" class="form-control" name="adress" placeholder="Адрес">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="inn">БИК</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="bik" class="form-control" name="bik" placeholder="БИК" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <button id="biksend" class="btn btn-dark" type="button">Найти банк</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="kpp">КПП</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="kpp" class="form-control" name="kpp" placeholder="КПП">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="bank_name">Название банка</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="bank_name" class="form-control" name="bank_name" placeholder="Название банка">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="r_account">Расчетный счет</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="r_account" class="form-control" name="r_account" placeholder="Рассчетный счет">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="kor_account">Корреспондентский счёт</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="kor_account" class="form-control" name="kor_account" placeholder="Корреспондентский счёт">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="fio_ceo">ФИО руководителя</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="fio_ceo" class="form-control" name="fio_ceo" placeholder="ФИО руководителя">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="reason">Основание</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <select name="reason" id="reason">
                                                <option value="ustav">Устав</option>
                                                <option value="power_of_attorney">Доверенность</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="number_power_of_attorney">Номер доверенности</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="number_power_of_attorney" class="form-control" name="number_power_of_attorney" placeholder="Номер доверенности">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="date_power_of_attorney">Дата доверенности</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="date" id="date_power_of_attorney" class="form-control" name="date_power_of_attorney" placeholder="Дата доверенности">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <label for="user_id">Аккаунт владельца</label>
                        <div class="form-group">
                            <div class="form-line">
                                <select name="user_id" id="user_id">
                                    @if(!empty($clients))
                                        @foreach($clients as $client)
                                            <option value="{{$client->id}}">{{$client->name}}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                        </div>

                        <input type="checkbox" id="active" name="active" class="filled-in">
                        <label for="active">Включено</label>
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
