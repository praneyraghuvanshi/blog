<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category',
    ];

    public function posts()
    {
    	return $this->hasMany('App\Post', 'category_id', 'id');
    }

    public function users()
    {
        return $this->hasManyThrough('App\User', 'App\Post');
    }
}
