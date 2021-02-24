@if ($errors->any())
    @foreach ($errors->all() as $error)
        <div class="alert alert bg-red">{{ $error }}</div>
    @endforeach
@endif
