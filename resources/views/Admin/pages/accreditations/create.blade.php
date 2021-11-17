@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание Аккредитации
                    </h2>
                    <ul class="header-dropdown m-r--5">
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">more_vert</i>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="javascript:void(0);">Action</a></li>
                                <li><a href="javascript:void(0);">Another action</a></li>
                                <li><a href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="body">
                    <form action="/superadmin/accreditations/create" method="POST">
                        @csrf
                        <label for="name">Название</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" placeholder="Введите название..." required>
                            </div>
                        </div>
                        <label for="organization_id">Организация</label>
                        @if(!empty($organizations))
                            <select class="form-control" name="organization_id" required>
                                @foreach($organizations as $org)
                                    <option value="{{$org->id}}">{{$org->name}}</option>
                                @endforeach
                            </select>
                        @endif
                        <label for="user_id">Пользователь</label>
                        @if(!empty($users))
                            <select class="form-control" name="user_id" required>
                                @foreach($users as $org)
                                    <option value="{{$org->id}}">{{$org->name}}</option>
                                @endforeach
                            </select>
                        @endif
                        <div class="switch">
                            Пройдена как покупатель:
                            <label>
                                Нет
                                <input name="complete_client" type="checkbox" >
                                <span class="lever">

                                </span>Да
                            </label>
                        </div>
                        <div class="switch">
                            Пройдена как поставщик:
                            <label>
                                Нет
                                <input name="complete_prodavec" type="checkbox">
                                <span class="lever">

                                </span>Да
                            </label>
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
