from django import forms
from .models import Service

class ServiceAdminForm(forms.ModelForm):
    points_text = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 5}),
        required=False,
        help_text='Enter each point on a new line'
    )

    class Meta:
        model = Service
        fields = '__all__'
        exclude = ['points']  # Exclude the original points field

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if self.instance.pk and self.instance.points:
            self.fields['points_text'].initial = '\n'.join(self.instance.points)

    def clean(self):
        cleaned_data = super().clean()
        points_text = cleaned_data.get('points_text', '')
        if points_text:
            cleaned_data['points'] = [point.strip() for point in points_text.split('\n') if point.strip()]
        else:
            cleaned_data['points'] = []  # Ensure points is never None
        return cleaned_data

    def save(self, commit=True):
        instance = super().save(commit=False)
        points_text = self.cleaned_data.get('points_text', '')
        if points_text:
            instance.points = [point.strip() for point in points_text.split('\n') if point.strip()]
        else:
            instance.points = []
        if commit:
            instance.save()
        return instance 