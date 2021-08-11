<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* auth_profile/show.html.twig */
class __TwigTemplate_848f95915bbbd449e09208bd6998aea02929890234a34bcf347d2cb2014a2182 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "auth_profile/show.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "auth_profile/show.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "AuthProfile";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "    <h1>AuthProfile</h1>

    <table class=\"table\">
        <tbody>
            <tr>
                <th>Id</th>
                <td>";
        // line 12
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 12, $this->source); })()), "id", [], "any", false, false, false, 12), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Nickname</th>
                <td>";
        // line 16
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 16, $this->source); })()), "nickname", [], "any", false, false, false, 16), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>";
        // line 20
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 20, $this->source); })()), "name", [], "any", false, false, false, 20), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Picture</th>
                <td>";
        // line 24
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 24, $this->source); })()), "picture", [], "any", false, false, false, 24), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Updated_at</th>
                <td>";
        // line 28
        ((twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 28, $this->source); })()), "updatedAt", [], "any", false, false, false, 28)) ? (print (twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 28, $this->source); })()), "updatedAt", [], "any", false, false, false, 28), "Y-m-d H:i:s"), "html", null, true))) : (print ("")));
        echo "</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>";
        // line 32
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 32, $this->source); })()), "email", [], "any", false, false, false, 32), "html", null, true);
        echo "</td>
            </tr>
            <tr>
                <th>Email_verified</th>
                <td>";
        // line 36
        echo ((twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 36, $this->source); })()), "emailVerified", [], "any", false, false, false, 36)) ? ("Yes") : ("No"));
        echo "</td>
            </tr>
            <tr>
                <th>Sub</th>
                <td>";
        // line 40
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 40, $this->source); })()), "sub", [], "any", false, false, false, 40), "html", null, true);
        echo "</td>
            </tr>
        </tbody>
    </table>

    <a href=\"";
        // line 45
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("auth_profile_index");
        echo "\">back to list</a>

    <a href=\"";
        // line 47
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("auth_profile_edit", ["id" => twig_get_attribute($this->env, $this->source, (isset($context["auth_profile"]) || array_key_exists("auth_profile", $context) ? $context["auth_profile"] : (function () { throw new RuntimeError('Variable "auth_profile" does not exist.', 47, $this->source); })()), "id", [], "any", false, false, false, 47)]), "html", null, true);
        echo "\">edit</a>

    ";
        // line 49
        echo twig_include($this->env, $context, "auth_profile/_delete_form.html.twig");
        echo "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "auth_profile/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  148 => 49,  143 => 47,  138 => 45,  130 => 40,  123 => 36,  116 => 32,  109 => 28,  102 => 24,  95 => 20,  88 => 16,  81 => 12,  73 => 6,  66 => 5,  53 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}AuthProfile{% endblock %}

{% block body %}
    <h1>AuthProfile</h1>

    <table class=\"table\">
        <tbody>
            <tr>
                <th>Id</th>
                <td>{{ auth_profile.id }}</td>
            </tr>
            <tr>
                <th>Nickname</th>
                <td>{{ auth_profile.nickname }}</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>{{ auth_profile.name }}</td>
            </tr>
            <tr>
                <th>Picture</th>
                <td>{{ auth_profile.picture }}</td>
            </tr>
            <tr>
                <th>Updated_at</th>
                <td>{{ auth_profile.updatedAt ? auth_profile.updatedAt|date('Y-m-d H:i:s') : '' }}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{ auth_profile.email }}</td>
            </tr>
            <tr>
                <th>Email_verified</th>
                <td>{{ auth_profile.emailVerified ? 'Yes' : 'No' }}</td>
            </tr>
            <tr>
                <th>Sub</th>
                <td>{{ auth_profile.sub }}</td>
            </tr>
        </tbody>
    </table>

    <a href=\"{{ path('auth_profile_index') }}\">back to list</a>

    <a href=\"{{ path('auth_profile_edit', {'id': auth_profile.id}) }}\">edit</a>

    {{ include('auth_profile/_delete_form.html.twig') }}
{% endblock %}
", "auth_profile/show.html.twig", "C:\\Users\\Guillaume\\Documents\\GitHub\\MeetAMate__Web\\symfony\\mam-api\\templates\\auth_profile\\show.html.twig");
    }
}
