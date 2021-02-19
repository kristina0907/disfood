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
                            <h6 class="m-0 font-weight-bold text-primary">Роли пользователей</h6>
                        </div>
                        <div class="card-body">
                            <form class="user" action="/superadmin/role/create" method="POST">
                                @csrf
                                <div class="form-group">
                                    <input type="text" class="form-control " id="name" name="name"  placeholder="Введите название роли...">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="slug" name="slug" placeholder="slug">
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox small">
                                        <input type="checkbox" class="custom-control-input" id="active" name="active">
                                        <label class="custom-control-label" for="active">Включено
                                            </label>
                                    </div>
                                </div>
                                <hr>
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
