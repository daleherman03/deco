from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer
from django.core.mail import send_mail

@api_view(['POST'])
def contact_create(request):
    if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            subject = "New Contact Form Submission"
            message = f"""
            Name: {serializer.validated_data['name']}
            Email: {serializer.validated_data['email']}
            Address: {serializer.validated_data.get('address', 'N/A')}
            Message: {serializer.validated_data['message']}
            """
            from_email = 'deco.potential.client@gmail.com'
            recipient_list = ['daleherman03@gmail.com']

            try:
                send_mail(subject, message, from_email, recipient_list)
            except Exception as e:
                print(f"Error sending email: {e}")
                
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
