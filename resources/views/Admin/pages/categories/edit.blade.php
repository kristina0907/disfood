@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование категории
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
                    @if(!empty($category))
                        <form action="/superadmin/categories/update" method="POST">
                            @csrf
                            <input type="hidden" name="id" value="{{$category->id}}">
                            <label for="name">Название категории</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="name" class="form-control" name="name" placeholder="Введите название категории..." value="{{old('name',$category->name)}}">
                                </div>
                            </div>
                            <label for="slug">Slug</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="slug" class="form-control" name="slug" placeholder="Slug..." value="{{old('slug',$category->slug)}}">
                                </div>
                            </div>
                            @if(!empty($categories))
                                <select class="form-control" name="parent_id">
                                    @foreach($categories as $cat)
                                        @if($cat->id != $category->id)
                                            <option value="{{$cat->id}}"
                                                    @if($category->parent_id === $cat->id)
                                                    selected
                                                @endif
                                            >{{$cat->name}}</option>
                                        @endif
                                    @endforeach
                                </select>
                            @endif
                            <br/>
                            @include('Admin.layouts.errors')
                            <button type="submit" class="btn btn-primary m-t-15 waves-effect">
                                Сохранить
                            </button>
                        </form>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
