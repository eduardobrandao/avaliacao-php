<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;


class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(User $user){
        $this->User = $user;
    }

    //
    public function index(){
       $user = User::all();

       return response() ->json($user);
       
       
    }
    public function get($id){
        $user = User::find($id);

        return response()->json($user);   
    }
    

    public function store(Request $request){

        $user = User::create($request->all());

            return response()->json($user);
            
    }   
    public function update($id, Request $request){

        $user = User::find($id)
            ->update($request->all());

            return response()->json($user);
        
    }

    public function destroy($id){
        $user = User::find($id)
            ->delete();

            return response()->json(null);
            
    }

        
}