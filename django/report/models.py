from django.db import models

# Create your models here.

Evaluation = [
    {'very good', '優'},
    {'good', '良'},
    {'so', '可'},
    {'bad', '不'},
]


class Report(models.Model):
    date = models.DateField('投稿日', auto_now_add=True)
    work = models.TextField('仕事のこと', blank=True)
    study = models.TextField('勉強したこと', blank=True)
    good = models.TextField('良かったこと', blank=True)
    bad = models.TextField('悪かったこと', blank=True)
    improvement = models.TextField('改善点', blank=True)
    word = models.TextField('言葉', blank=True)
    evaluation = models.CharField('評価', choices=Evaluation, max_length=9)
    isOpen = models.BooleanField('公開', default=True)

    def __str__(self):
        date_str = self.date.strftime('%Y/%m/%d')
        return date_str
