<?php

namespace App\Http\Controllers;

use App\Models\LogoBanner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LogoBannerController extends Controller
{
    public function index()
    {
        $logoBanners = LogoBanner::latest()->paginate(10);
        return view('logo_banners.index', compact('logoBanners'));
    }

    public function create()
    {
        return view('logo_banners.create');
    }

    public function store(Request $request)
    {
        if (LogoBanner::count() >= 5) {
            return back()->with('error', 'Đã đạt giới hạn 5 banner, không thể thêm mới.');
        }

        $data = $request->validate([
            'type' => 'required|integer',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:8192',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Lưu hình ảnh vào storage/public/logo_banner
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('logo_banner', 'public');
        }

        LogoBanner::create($data);

        return redirect()->route('logo_banners.index')->with('success', 'Thêm banner thành công!');
    }

    public function edit($id)
    {
        $logoBanner = LogoBanner::findOrFail($id);
        return view('logo_banners.edit', compact('logoBanner'));
    }

    public function update(Request $request, $id)
    {
        $logoBanner = LogoBanner::findOrFail($id);

        $data = $request->validate([
            'type' => 'required|integer',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:8192',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_active' => 'required|boolean',
        ]);

        // Nếu có hình mới, xóa hình cũ và lưu hình mới
        if ($request->hasFile('image')) {
            Storage::delete('public/' . $logoBanner->image);
            $data['image'] = $request->file('image')->store('logo_banner', 'public');
        }

        $logoBanner->update($data);

        return redirect()->route('logo_banners.index')->with('success', 'Cập nhật banner thành công!');
    }

    public function destroy($id)
    {
        $logoBanner = LogoBanner::findOrFail($id);

        // Xóa hình trong storage
        if ($logoBanner->image) {
            Storage::delete('public/' . $logoBanner->image);
        }

        $logoBanner->delete();

        return redirect()->route('logo_banners.index')->with('success', 'Xóa banner thành công!');
    }
}
