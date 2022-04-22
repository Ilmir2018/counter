<?php

namespace App\Http\Controllers;

use App\Services\CounterServices;
use App\Services\ResponceService;
use Illuminate\Http\Request;
use App\Counter;

class CounterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $service;

    public function __construct(CounterServices $service) {
        $this->service = $service;
    }

    public function index()
    {
        return ResponceService::sendJsonResponce(
            true,
            [
                'items'=>$this->service->getItems()->toArray()
            ]
            );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Counter $counter)
    {
        $counter = $this->service->store($request, $counter);
        return ResponceService::sendJsonResponce(
            true,
            [
                'item' => $counter->toArray()
            ]
            );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
