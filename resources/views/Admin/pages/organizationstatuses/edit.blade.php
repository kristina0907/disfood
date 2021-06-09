@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование статусов организаций
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/organizationstatuses/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$status->id}}">
                        <label for="name">Название статуса</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" value="{{old('name',$status->name)}}" name="name" placeholder="Введите название категории..." required>
                            </div>
                        </div>
                        <input type="checkbox" id="active" @if($status->active) checked @endif name="active" class="filled-in">
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
