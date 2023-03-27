from django.db import models
from django.shortcuts import reverse
from django.utils.safestring import mark_safe
from ckeditor_uploader.fields import  RichTextUploadingField


# Create your models here.
class Category(models.Model): 
    name = models.CharField(max_length=500, db_index=True) 
    slug = models.SlugField(max_length=255, unique=True) 
    keywords = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    image = models.ImageField(blank=True,upload_to='media/category') 
    
    class Meta: 
        db_table = 'categories' 
        verbose_name_plural = 'Categories' 
    
    def __str__(self): 
        return self.name 
 
    def get_absolute_url(self):
        return reverse("shop:category_list", args= [self.slug])


class Product(models.Model): 
    category = models.ForeignKey(Category,related_name='product', on_delete=models.CASCADE)
    brand = models.CharField(max_length=255) 
    title = models.CharField(max_length=255, unique=True)
    description = RichTextUploadingField()
    image = models.ImageField(blank=True,upload_to='media/product') 
    slug = models.SlugField(max_length=255, unique=True) 
    price = models.DecimalField(max_digits=9,decimal_places=2) 
    discount_price = models.DecimalField(max_digits=9,decimal_places=2,blank=True,default=0.00) 
    quantity= models.IntegerField(default=0)
    in_stock = models.BooleanField(default=True) 
    is_active = models.BooleanField(default=True) 
    is_bestseller = models.BooleanField(default=False) 
    is_featured = models.BooleanField(default=False) 
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True) 
    #add size specification table
    
    class Meta: 
        db_table = 'products' 
        ordering = ['-created_at'] 

    def __str__(self): 
        return self.title
 
    def get_absolute_url(self):
        return reverse("shop:product_list", args= [self.slug])

    def image_tag(self):
        if self.image:
            return mark_safe('<img src="{}"  height="50" />'.format(self.image.url))
        else:
            return '(No image)'
    


class Concern(models.Model):
    name = models.CharField(max_length=255, unique=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta: 
        db_table = 'concerns'
        verbose_name_plural = 'concerns'  


    def __str__(self): 
        return self.name



class ProductImages(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, unique=True) 
    image = models.ImageField(blank=True,upload_to='media/')

    class Meta: 
        db_table = 'image-gallery'
        verbose_name_plural = 'ProductImages'  


    def __str__(self): 
        return self.title

