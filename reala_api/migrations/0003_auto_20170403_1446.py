# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-03 19:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('reala_api', '0002_auto_20170403_1441'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parcel',
            name='contact',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='reala_api.Owner'),
        ),
    ]
