import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';






import { routes } from './app.routes';
import { FeatherModule } from 'angular-feather';
import {
  Eye,Home,User,HelpCircle, CreditCard, Server, Settings, Tool, Grid, Edit, Headphones, Layers, Code, Tablet, BarChart2, Check, PieChart, ArrowRight, Bookmark,List, Coffee, Award,
  UserPlus, MapPin, Mail, Menu, Phone, Sun, Moon, DollarSign, Send, Search, ShoppingBag,  ArrowLeft,ArrowDown,  Lock, LogOut,AlertCircle,ChevronDown,ChevronUp, Users, Box, Tag
} from 'angular-feather/icons';

const icons = {
 Eye,Home,User,HelpCircle, CreditCard, Server, Settings, Tool, Grid, Edit, Headphones, Layers, Code, Tablet, BarChart2, Check, PieChart, ArrowRight, Bookmark,List, Coffee, Award,
 UserPlus, MapPin, Mail, Menu, Phone, Sun, Moon, DollarSign, Send, Search, ShoppingBag,  ArrowLeft, ArrowDown, Lock, LogOut,AlertCircle,ChevronDown, ChevronUp, Users, Box, Tag
};

export const appConfig: ApplicationConfig = {
  providers: [ provideAnimationsAsync(),providePrimeNG({
            theme: {
                preset: Lara
            }
        }),
     provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(FeatherModule.pick(icons),)]
};
