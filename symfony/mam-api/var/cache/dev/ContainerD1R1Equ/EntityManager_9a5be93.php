<?php

namespace ContainerD1R1Equ;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{

    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHoldera9d54 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerea2df = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties37f2a = [
        
    ];

    public function getConnection()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getConnection', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getMetadataFactory', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getExpressionBuilder', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'beginTransaction', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getCache', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getCache();
    }

    public function transactional($func)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'transactional', array('func' => $func), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->transactional($func);
    }

    public function commit()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'commit', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->commit();
    }

    public function rollback()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'rollback', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getClassMetadata', array('className' => $className), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'createQuery', array('dql' => $dql), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'createNamedQuery', array('name' => $name), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'createQueryBuilder', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'flush', array('entity' => $entity), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'clear', array('entityName' => $entityName), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->clear($entityName);
    }

    public function close()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'close', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->close();
    }

    public function persist($entity)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'persist', array('entity' => $entity), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'remove', array('entity' => $entity), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'refresh', array('entity' => $entity), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'detach', array('entity' => $entity), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'merge', array('entity' => $entity), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getRepository', array('entityName' => $entityName), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'contains', array('entity' => $entity), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getEventManager', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getConfiguration', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'isOpen', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getUnitOfWork', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getProxyFactory', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'initializeObject', array('obj' => $obj), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'getFilters', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'isFiltersStateClean', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'hasFilters', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return $this->valueHoldera9d54->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerea2df = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHoldera9d54) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHoldera9d54 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHoldera9d54->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, '__get', ['name' => $name], $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        if (isset(self::$publicProperties37f2a[$name])) {
            return $this->valueHoldera9d54->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldera9d54;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHoldera9d54;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldera9d54;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHoldera9d54;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, '__isset', array('name' => $name), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldera9d54;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHoldera9d54;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, '__unset', array('name' => $name), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldera9d54;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHoldera9d54;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, '__clone', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        $this->valueHoldera9d54 = clone $this->valueHoldera9d54;
    }

    public function __sleep()
    {
        $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, '__sleep', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;

        return array('valueHoldera9d54');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerea2df = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerea2df;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerea2df && ($this->initializerea2df->__invoke($valueHoldera9d54, $this, 'initializeProxy', array(), $this->initializerea2df) || 1) && $this->valueHoldera9d54 = $valueHoldera9d54;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHoldera9d54;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHoldera9d54;
    }


}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
