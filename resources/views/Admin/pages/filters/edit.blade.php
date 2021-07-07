@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание фильтра
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/filters/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" id="id" value="{{$filter->id}}"/>
                        <label for="name">Название фильтра</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" value="{{$filter->name}}" name="name" placeholder="Введите название фасовки..." required>
                            </div>
                        </div>


                        <label for="category_id">Описание</label>
                        <div class="form-group">
                            <div class="form-line">
                                <textarea name="desc" id="desc" cols="30" rows="10" class="form-control">{{$filter->desc}}</textarea>
                            </div>
                        </div>

                        <label for="category_id">Тип продукта к которому относится этот фильтр</label>
                        <div class="form-group">
                            <div class="form-line">
                                <select name="type_id[]" id="category_id" multiple>
                                    @if(!empty($types))
                                        @foreach($types as $type)
                                            <option value="{{$type->id}}"
                                                @if(!empty($filter->types))
                                                    @foreach($filter->types as $t)
                                                        @if($t->id == $type->id)
                                                            selected
                                                        @endif
                                                    @endforeach
                                                @endif
                                            >{{$type->name}}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                        </div>

                        <input type="checkbox" id="active" name="active" @if($filter->active) checked @endif class="filled-in">
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
