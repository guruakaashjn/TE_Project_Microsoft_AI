from rest_framework import serializers

class JsonSerializer(serializers.Serializer):
   """Your data serializer, define your fields here."""
   columns = serializers.ListField()
   data = serializers.ListField()