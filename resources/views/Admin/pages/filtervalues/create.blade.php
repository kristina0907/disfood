@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание значения фильтра
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/filtervalues/create" method="POST" enctype="multipart/form-data">
                        @csrf
                        <label for="name">Значение фильтра</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="value" class="form-control" name="value" placeholder="Введите название фасовки..." required>
                            </div>
                        </div>

                        <label for="category_id">Фильтр  к которому относится это значение</label>
                        <div class="form-group">
                            <div class="form-line">
                                <select name="filter_id" id="filter_id">
                                    @if(!empty($filters))
                                        @foreach($filters as $filter)
                                            <option value="{{$filter->id}}">{{$filter->name}}</option>
                                        @endforeach
                                    @endif
                                </select>
                            </div>
                        </div>

                        <input type="checkbox" id="active" checked name="active" class="filled-in">
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
