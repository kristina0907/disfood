@extends('Admin.master')

@section('content')


    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование пользователя
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
                    <form action="/superadmin/user/update" method="POST">
                        @csrf
                        <input type="hidden" name="id" value="{{$user->id}}">
                        <label for="name">Имя пользователя</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="{{$user->name}}" placeholder="Введите имя пользователя...">
                            </div>
                        </div>

                        <label for="email">E-mail</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="email" id="email" class="form-control" name="email" value="{{$user->email}}" placeholder="Email">
                            </div>
                        </div>

                        <label for="password">Пароль</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="password" class="form-control" id="password" name="password" placeholder="Пароль">
                            </div>
                        </div>

                        <label for="password">Повторите пароль</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Повторите Пароль">
                            </div>
                        </div>

                        <select class="form-control" name="roles[]" multiple>
                            @if(!empty($roles))
                                @foreach($roles as $role)
                                    <option value="{{$role->id}}"
                                            @if(!empty($user->roles))
                                                @foreach($user->roles as $r)
                                                    @if($role->id == $r->id)
                                                        selected
                                                    @endif
                                                @endforeach
                                            @endif
                                    >{{$role->name}}</option>
                                @endforeach
                            @endif
                        </select>

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
