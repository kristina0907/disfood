@extends('Admin.master')

@section('content')
    <div class="container-fluid">
        <div class="col md-12">
            <!-- Page Heading -->
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Панель администратора</h1>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-12 m-3">
                <div class="row">
                    <div class="card shadow mb-12">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Создание пользователя</h6>
                        </div>
                        <div class="card-body">
                            <form class="user" action="/superadmin/user/create" method="POST">
                                @csrf
                                <div class="form-group">
                                    <input type="text" class="form-control " id="name" name="name"  placeholder="Введите имя пользователя...">
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="email">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="password" name="password" placeholder="пароль">
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Повторите пароль">
                                </div>
                                <div class="form-group">
                                    <label>
                                        Роли пользователя
                                    </label>
                                    <select class="form-control" name="roles[]" multiple>
                                        @if(!empty($roles))
                                            @foreach($roles as $role)
                                                <option value="{{$role->id}}">{{$role->name}}</option>
                                            @endforeach
                                        @endif
                                    </select>
                                </div>
                                <hr>
                                @if ($errors->any())
                                    <div class="alert alert-danger">
                                        <ul>
                                            @foreach ($errors->all() as $error)
                                                <li>{{ $error }}</li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endif
                                <button type="submit" class="btn btn-google btn-user btn-block">
                                    Сохранить
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
