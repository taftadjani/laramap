<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Girl extends Model
{
    protected $table = 'girls';
    protected $fillable = ['name','lng','lat'];
}
