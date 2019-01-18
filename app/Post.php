<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category_id', 'title', 'content', 'user_id',
    ];

    public function user()
    {
    	return $this->belongsTo('App\User');
    }

    public function category()
    {
    	return $this->belongsTo('App\Category', 'category_id', 'id');
    }

    public function comments()
    {
    	return $this->hasMany('App\Comment');
    }

    public function tags()
    {
    	return $this->belongsToMany('App\Tag', 'post_tags');
    }
}
