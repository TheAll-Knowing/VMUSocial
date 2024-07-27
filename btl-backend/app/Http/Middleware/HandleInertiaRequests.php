<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'notifications' => fn() => $request->user()
                    ? $request->user()->notifications
                    : null,
                'unReadNotifications' => fn() => $request->user()
                    ? $request->user()->unreadNotifications->where('type', '<>', 'sendMessage-notification')->count()
                    : null,
                'unReadMessages' => fn() => $request->user()
                    ? $request->user()->unreadNotifications->groupBy('sender_id')->map->first()->values()->all()
                    : null,
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
