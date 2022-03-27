from rest_framework import pagination

class CustomPagination(pagination.LimitOffsetPagination):
    default_limit = 50
    limit_query_param = 'limit'
    offset_query_param = 'offset'
    max_limit = 50