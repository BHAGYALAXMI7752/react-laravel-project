
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('mobile_number', 20)
                ->nullable()
                ->unique()
                ->after('email');

            $table->string('work_status', 20)
                ->nullable()
                ->after('mobile_number');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropUnique(['mobile_number']);

            $table->dropColumn([
                'mobile_number',
                'work_status'
            ]);
        });
    }
};
