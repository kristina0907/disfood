@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование партнера
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/partners/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$partner->id}}">
                        <label for="name">Изображение партнера</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input name="image" type="file" />
                            </div>
                        </div>
                        <label for="name">Название партнера</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" value="{{old('name',$partner->name)}}" name="name" placeholder="Введите название партнера..." required>
                            </div>
                        </div>

                        <label for="category_id">Описание</label>
                        <div class="form-group">
                            <div class="form-line">
                                <textarea name="description" id="description" cols="30" rows="10" class="form-control">{{old('description',$partner->description)}}</textarea>
                            </div>
                        </div>


                        <input type="checkbox" id="active" name="active" @if($partner->active) checked @endif class="filled-in">
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
