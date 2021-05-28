@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование фасовки
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/packing/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$packing->id}}">
                        <label for="name">Изображение фасовки</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input name="image" type="file" />
                            </div>
                        </div>
                        <label for="name">Название фасовки</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" value="{{old('name',$packing->name)}}" name="name" placeholder="Введите название фасовки..." required>
                            </div>
                        </div>
                        <label for="value">Значение фасовки</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="number" id="value" class="form-control" name="value"  value="{{old('value',$packing->value)}}" placeholder="Введите название фасовки..." required>
                            </div>
                        </div>
                        <label for="category_id">Описание</label>
                        <div class="form-group">
                            <div class="form-line">
                                <textarea name="description" id="description" cols="30" rows="10" class="form-control">{{old('description',$packing->description)}}</textarea>
                            </div>
                        </div>

                        <label for="category_id">Категория</label>
                        <div class="form-group">
                            <div class="form-line">
                                <select name="category[]" id="category" multiple>
                                    @if(!empty($categories))
                                        @foreach($categories as $cat)
                                            <option value="{{$cat->id}}"
                                            @foreach($packing->categories as $category)
                                                @if($cat->id == $category->id)
                                                    selected
                                                @endif
                                            @endforeach

                                            >{{$cat->name}}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                        </div>

                        <input type="checkbox" id="active" name="active" @if($packing->active) checked @endif class="filled-in">
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
