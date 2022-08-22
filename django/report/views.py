from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, viewsets, filters

from .models import Report


# Create your views here.
class ListReport(APIView):
    def get(self, request):
        try:
            reports = Report.objects.filter(isOpen=True).order_by('-date')
            # reports = Report.objects.all().order_by('-date')
            response_list = [
                {
                    'id': report.id,
                    'date': report.date,
                    'evaluation': report.evaluation
                }
                for report in reports
            ]
            return Response(response_list)

        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class DailyReport(APIView):
    def get(self, request, pk):
        try:
            try:
                report = Report.objects.get(id=pk)
            except:
                error_message = '日報が存在しません'
                return Response(error_message, status=status.HTTP_404_NOT_FOUND)

            response = {
                'id': report.id,
                'date': report.date,
                'work': report.work,
                'study': report.study,
                'good': report.good,
                'bad': report.bad,
                'improvement': report.improvement,
                'word': report.word,
                'evaluation': report.evaluation,
            }
            return Response(response)

        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CategoryReport(APIView):
    def get(self, request, category):
        try:
            reports = Report.objects.filter(isOpen=True).values_list(
                'date', category).order_by('-date')
            response_list = [
                {
                    'date': report[0],
                    'content': report[1],
                }
                for report in reports
            ]

            return Response(response_list)

        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
