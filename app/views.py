from django.shortcuts import redirect, render

from app.models import Logins, User

# Create your views here.



def home(request):
    token = request.COOKIES.get('token')
    if token:
        login:Logins = Logins.objects.filter(token=token).first()
        if login:
            return render(request, 'index.html')
    return redirect('login')
    


def login(request):
    if request.method == 'GET':
        token = request.COOKIES.get('token')
        login:Logins = Logins.objects.filter(token=token).first()
        if login:
            return render(request, 'index.html')
        else:
            return render(request, 'login.html')
    else:
        print('login')
        username = request.POST.get('username')
        password = request.POST.get('password')
        user:User = User.objects.filter(username=username, password=password).first()
        if user:
            x: Logins = Logins.objects.filter(user=user).first()
            if not x:
                login:Logins = Logins.objects.create(user=user)
                response = redirect('home')
                response.cookies['token'] = login.token
                return response
            else:
                return redirect('home')
        else:
            return redirect('login')


def logout(request):
    token = request.COOKIES.get('token')
    if token:
        login:Logins = Logins.objects.filter(token=token).first()
        if login:
            login.delete()
            return redirect('login')
    return redirect('login')