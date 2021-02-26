<ol>
    @foreach($childs as $child)
        <li class="dd-item dd3-item" data-id="{{$child->id}}">
            <div class="dd-handle dd3-handle"></div>
            <div class="dd3-content">{{$child->name}}</div>
            @if($child->children()->exists() && count($child->children))
                @include('Admin.pages.categories.tree',['childs' => $child->children])
            @endif
        </li>
    @endforeach
</ol>

