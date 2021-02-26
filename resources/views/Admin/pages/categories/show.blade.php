@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Категории
                        <a href="/superadmin/categories/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>
                    </h2>
                </div>
                <div class="body">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs tab-nav-right" role="tablist">
                        <li role="presentation" class="active">
                            <a href="#home_only_icon_title" data-toggle="tab">
                                <i class="material-icons">list</i>
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#profile_only_icon_title" data-toggle="tab">
                                <i class="material-icons">sort</i>
                            </a>
                        </li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="home_only_icon_title">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название категории</th>
                                                <th>slug</th>
                                                <th>Родитель</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название категории</th>
                                                <th>slug</th>
                                                <th>Родитель</th>
                                                <th>Дата создания</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            @if(!empty($categories))
                                                @foreach($categories as $category)
                                                    <tr role="row" class="odd">
                                                        <td>{{$category->id}}</td>
                                                        <td>{{$category->name}}</td>
                                                        <td>{{$category->slug}}</td>
                                                        <td>
                                                            @if($category->parent_id)
                                                                <span class="badge bg-green">{{$category->parent->name}}</span>
                                                            @else
                                                                <span class="badge bg-red">Нет</span>
                                                            @endif
                                                        </td>
                                                        <td>{{$category->created_at}}</td>
                                                        <td>
                                                            <a href="/superadmin/categories/edit/{{$category->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/categories/delete/{{$category->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            @endif
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="profile_only_icon_title">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="clearfix m-b-20">
                                        <div class="dd nestable-with-handle">
                                            <ol class="dd-list">
                                                @foreach($categories as $cat)
                                                    @if(!empty($cat) && $cat->parent_id === 0)
                                                        <li class="dd-item dd3-item" data-id="{{$cat->id}}">
                                                            <div class="dd-handle dd3-handle"></div>
                                                            <div class="dd3-content">{{$cat->name}}</div>
                                                        </li>
                                                        @if(count($cat->children))
                                                            @include('Admin.pages.categories.tree',['childs' => $cat->children])
                                                        @endif
                                                    @endif
                                                @endforeach
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
