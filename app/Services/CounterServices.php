<?php

namespace App\Services;

use App\Counter;
use Illuminate\Http\Request;

class CounterServices {

    public function getItems() {
        return Counter::all();
    }

    public function store(Request $request, Counter $counter) {
        $counter->fill($request->only($counter->getFillable()));
        $counter->save();
        return $counter;
    }
}