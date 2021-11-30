<?php

namespace App\Services;

class DocumentGeneratorService
{

    /**
     * @var SettingsService
     */

    protected $settingsService;

    /**
     * @param SettingsService $settingsService
     */

    public function __construct(SettingsService $settingsService)
    {
        $this->settingsService = $settingsService;
    }


    public function generateAccredDogovor()
    {
        dd($this);
    }
}
