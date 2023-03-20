from django.contrib import admin
from app.models import Category, Product, ProductImages, Concern
# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

class ProductImageInline(admin.TabularInline):
    model = ProductImages
    extra = 3

class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'brand', 'category', 'image_tag', 'slug', 'price','discount_price','quantity','in_stock']
    list_filter = ['category', 'in_stock', 'is_active']
    list_editable =['price','discount_price','quantity','in_stock']
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('image_tag',)
    inlines = [ProductImageInline]

class ConcernAdmin(admin.ModelAdmin):
    list_display = ['name']


admin.site.register(Category,CategoryAdmin)
admin.site.register(Product,ProductAdmin)
admin.site.register(Concern,ConcernAdmin)
admin.site.register(ProductImages)