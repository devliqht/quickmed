<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Rename name to first_name
            $table->renameColumn('name', 'first_name');
            
            // Add last_name column
            $table->string('last_name')->after('first_name');
            
            // Add user_type_id column with foreign key
            $table->foreignId('user_type_id')->after('id')->nullable()
                ->constrained('user_types')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['user_type_id']);
            $table->dropColumn('user_type_id');
            $table->dropColumn('last_name');
            $table->renameColumn('first_name', 'name');
        });
    }
}; 